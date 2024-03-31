import { useLoaderData } from 'react-router-dom';
import Banner from "../components/Banner";
import Card from '../components/Card';

const Home = () => {
    const cards = useLoaderData();

    // Ensure cards is an array before mapping
    if (!Array.isArray(cards)) {
        return (
            <div>
                <Banner />
                <h2 className="text-center font-semibold text-4xl py-8">Books</h2>
                <p>Error: Failed to load data</p>
            </div>
        );
    }

    return (
        <div>
            <Banner />
            <h2 className="text-center font-semibold text-4xl py-8">Books</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 gap-8 p-2'>
                {
                    cards.map(card => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Home;
