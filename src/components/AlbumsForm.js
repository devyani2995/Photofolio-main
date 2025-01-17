// importing hooks and toastify
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AlbumsForm({ addAlbum, showAlbumForm, setShowAlbumForm }) {
    // using ref for input 
    const inputRef = useRef();
    // to clear the input and put focus on it
    const clearInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    }
    // to pass the input field value if not whitespaces to addAlbum function
    const handleAdd = () => {
        if(inputRef.current.value.trim()){
            addAlbum(inputRef.current.value.trim());
            setShowAlbumForm(!showAlbumForm);
            inputRef.current.value = "";
        }
        else{
            toast.error("The input field can't be empty!")
        }
        inputRef.current.focus();
    }
    
    return (
        <form className="albums-form" onSubmit={(e) => {e.preventDefault();}}>
            <h2>Create an album</h2>
            <div style={{textAlign:"center"}}>
                <input type="text" name="album" className="albums-name" placeholder="Album Name" maxLength={30} ref={inputRef} required />
                <button type="button" className="create-btn" onClick={handleAdd}>Create</button>
                <button type="button" className="clear-btn" onClick={clearInput}>Clear</button>
            </div>
        </form>
    );
}

export default AlbumsForm;
