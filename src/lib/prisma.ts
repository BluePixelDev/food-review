import { PrismaClient } from "@prisma/client"

type Ratings = {
    meal_name: string
    date_presented: Date
    reviewed: boolean
    comment_count: number
}

const prisma = new PrismaClient()

export async function getServerSideProps() {
    const res_rating = await prisma.rating.findMany({
        include: {
            preparedMeal: {
                select: {
                    name: true,
                },
            },
            comments: true,
        },
    });

    const formattedRatings = res_rating.map(rating => ({
        meal_name: rating.preparedMeal.name,
        date_presented: rating.createdAt,
        reviewed: rating.reviewed,
        comment_count: rating.comments.length,
    }));

    return {
        props: { res_rating: formattedRatings },
    };
}

export default function Page({ res_rating }) {
    return (
        <main>
            <h1>Ratings</h1>
            <ul>
                {res_rating.map((rating: Ratings, index: number) => (
                    <li key={index}>
                        <p>Meal Name: {rating.meal_name}</p>
                        <p>Date Presented: {rating.date_presented.toDateString()}</p>
                        <p>Reviewed: {rating.reviewed ? "Yes" : "No"}</p>
                        <p>Comment Count: {rating.comment_count}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}