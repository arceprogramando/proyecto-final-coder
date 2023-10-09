import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [shoes, setShoes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const { genre } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const shoesCollection = collection(db, "shoes")

        let q = shoesCollection;
        console.log(q)
        if (genre) {
            q = query(shoesCollection, where("genre", "==", genre));
        }

        getDocs(q)
            .then((querySnapshot) => {
                const shoes = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setShoes(shoes);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError("Oops! There was an error fetching the data.");
                setIsLoading(false);
            });

    }, [genre]);


    return (
        <>
            <div className="flex justify-center">

                {isLoading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <main className="main">
                        {genre ? (
                            shoes ? (
                                <ItemList shoes={shoes} />

                            ) : (
                                <p>Cargando...</p>
                            )
                        ) : (
                            shoes ? (
                                <ItemList shoes={shoes} />


                            ) : (
                                <p>Cargando...</p>
                            )
                        )}
                    </main>
                )}
            </div>

        </>
    )
}

export default ItemListContainer