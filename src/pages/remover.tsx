import Dropzone, { FileRejection } from 'react-dropzone';
import { useState } from 'react';
import { FaTrashAlt, FaDownload } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import { saveAs } from 'file-saver';

export default function Remover() {
    const [file, setFile] = useState<File | null>();
    const [error, setError] = useState('');
    const [outputImage, setOutputImage] = useState<string | null>(null);
    const [base64image, setBase64Image] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const acceptedFileTypes = {
        'image/jpeg': ['.jpeg', '.png'],
    };

    const maxFileSize = 5 * 1024 * 1024; // 5MB

    const fileSize = (size: number) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const resetFiles = () => {
        setFile(null);
        setOutputImage(null);
    };

    const handleDrop = (
        acceptedFiles: File[],
        rejectedFiles: FileRejection[],
    ) => {
        // Check if any of the uploaded files are not valid
        if (rejectedFiles.length > 0) {
            console.log(rejectedFiles);
            setError('Please upload a PNG or JPEG image less than 5MB.');
            return;
        }
        resetFiles();

        setError('');
        setFile(acceptedFiles[0]);

        const reader = new FileReader();
        reader.onload = () => {
            const binaryStr = reader.result as string;
            setBase64Image(binaryStr);
        };
        reader.readAsDataURL(acceptedFiles[0]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const response = await fetch('/api/bgremover', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: base64image }),
        });

        let result = await response.json();

        if (result.error) {
            setError(result.error);
            setLoading(false);

            return;
        }

        setOutputImage(result.output);
        setLoading(false);
    };

    const handleDownload = () => {
        saveAs(
            outputImage as string,
            file?.name ? file.name + '-output.png' : 'output.png',
        );
    };

    return (
        <div className="mx-auto my-10 min-h-screen max-w-3xl px-4">
            <section className="mb-10 text-center">
                <h1 className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-5xl font-semibold text-transparent">
                    Remove background
                </h1>
            </section>
            <section className="mx-auto mb-12 w-full max-w-lg">
                <div className="mb-2 w-full cursor-pointer rounded-md border-4 border-dashed border-gray-500 text-center text-gray-500">
                    <Dropzone
                        onDrop={handleDrop}
                        accept={acceptedFileTypes}
                        multiple={false}
                        maxSize={maxFileSize}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className="p-8">
                                        Drag &ldquo;n&rdquo; drop some files
                                        here, or click to select files
                                    </p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
                {error && (
                    <div className="flex justify-center">
                        <p className="text-md text-yellow-500">{error}</p>
                    </div>
                )}
                {file && (
                    <div className="mt-2 flex items-center justify-center">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`mb-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-center text-lg text-white hover:bg-gradient-to-l ${
                                loading && 'cursor-progress'
                            }`}
                        >
                            Remove background
                        </button>
                    </div>
                )}
            </section>

            <section className="mt-4 grid grid-cols-2 gap-4">
                {file && (
                    <>
                        <div className="relative">
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="h-full w-full object-cover"
                            />
                            <button
                                className="absolute top-0 right-0 bg-yellow-500 p-2 text-black"
                                onClick={resetFiles}
                            >
                                <FaTrashAlt className="h-4 w-4 duration-300 hover:scale-125" />
                            </button>
                            <div className="text-md absolute bottom-0 left-0 right-0 break-all bg-gray-900 bg-opacity-50 p-2 text-white">
                                {file.name} ({fileSize(file.size)})
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center">
                            {loading && (
                                <ThreeDots
                                    height="60"
                                    width="60"
                                    color="#eeeeee"
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                />
                            )}
                            {outputImage && (
                                <>
                                    <button
                                        className="absolute top-0 right-0 bg-yellow-500 p-3 text-black"
                                        onClick={() => handleDownload()}
                                    >
                                        <FaDownload className="h-6 w-6 duration-300 hover:scale-125" />
                                    </button>
                                    <img
                                        src={outputImage}
                                        alt="output"
                                        className="h-full w-full object-cover"
                                    />
                                </>
                            )}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}
