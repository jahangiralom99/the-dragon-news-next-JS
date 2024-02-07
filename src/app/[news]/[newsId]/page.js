import { getSingleNews } from "@/utils/getSingleNews";

const NewsDetailsPage = async({ params }) => {
    
    const { data:news } = await getSingleNews(params.newsId);
    // console.log(data);

    return (
        <div>
            <h1>News Detail Page</h1>
        </div>
    );
};

export default NewsDetailsPage;