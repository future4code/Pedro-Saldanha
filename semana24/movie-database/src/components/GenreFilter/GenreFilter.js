import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Select, SelectContainer } from "./styled";



const GenreFilter = () => {
    const { setCurrentGenre, setCurrentPage } = useContext(GlobalStateContext);

    const genres = [
        { id: "28", name: "Ação" }, { id: "12", name: "Aventura" }, { id: "16", name: "Animação" },
        { id: "35", name: "Comédia" }, { id: "80", name: "Policial" }, { id: "99", name: "Documentário" },
        { id: "18", name: "Drama" }, { id: "10751", name: "Família" }, { id: "14", name: "Fantasia" },
        { id: "36", name: "Histórico" }, { id: "27", name: "Horror" }, { id: "10402", name: "Musical" },
        { id: "9648", name: "Mistério" }, { id: "10749", name: "Romance" }, { id: "878", name: "Ficção científica" },
        { id: "10770", name: "Filme para TV" }, { id: "53", name: "Suspense" }, { id: "10752", name: "Guerra" }, { id: "37", "name": "Velho Oeste" }
    ];

    const onChangeGenre = (event) => {
        setCurrentGenre(event.target.value)
        setCurrentPage("1")
    }

    return (
        <SelectContainer>
            <Select onChange={onChangeGenre}>
                <option value={""}>Todos os filmes</option>
                {genres.map((genre) => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })}
            </Select>

        </SelectContainer>
    );
}

export default GenreFilter;
