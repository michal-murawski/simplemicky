import { NextApiRequest, NextApiResponse } from 'next';
import Replicate from 'replicate';

export type NextApiBGRemoverRequestDTO = Omit<NextApiRequest, 'body'> & {
    body: {
        image: string;
    };
};

export type NextApiBGRemoverResponseDTO = {
    output: string;
    error?: string;
};

const handler = async (
    req: NextApiBGRemoverRequestDTO,
    res: NextApiResponse,
) => {
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN as string,
    });

    const output = await replicate.run(
        'cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003',
        {
            input: {
                image: req.body.image,
            },
        },
    );

    if (!output) {
        return res.status(500).json({ error: 'Something went wrong' });
    }

    console.log('OUTPUT: ', output);

    res.status(201).json({ output });
    res.end();
};

export default handler;
