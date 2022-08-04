import React, {useContext} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";

const MyPlaylistAddIcon = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleWatchList = (e) => {
        e.preventDefault();
        context.addToWatchLater(movie);
        console.log(context);
    }
    return (
        <IconButton aria-label="add to must watch list" onClick={handleWatchList}>
            <PlaylistAddIcon/>
        </IconButton>
    )
};

export default MyPlaylistAddIcon;