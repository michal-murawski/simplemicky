import { NextApiRequest, NextApiResponse } from 'next';
import Replicate from 'replicate';

export type NextApiInteriorDesignerRequestDTO = Omit<NextApiRequest, 'body'> & {
    body: {
        image: string;
        theme: string;
        room: string;
    };
};

export type NextApiBGRemoverResponseDTO = {
    output: string;
    error?: string;
};

const handler = async (
    req: NextApiInteriorDesignerRequestDTO,
    res: NextApiResponse,
) => {
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN as string,
    });

    const output = await replicate.run(
        'jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b',
        {
            input: {
                image: req.body.image,
                prompt: `a ${req.body.theme} ${req.body.room} Editorial Style Photo, Symmetry, Straight On, Modern Living Room, Large Window, Leather, Glass, Metal, Wood Paneling, Neutral Palette, Ikea, Natural Light, Apartment, Afternoon, Serene, Contemporary, 4k `,
                a_prompt:
                    'best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning',
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
