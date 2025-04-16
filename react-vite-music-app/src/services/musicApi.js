import axios from 'axios';

const API_URL = 'https://api.example.com/music'; // Replace with your actual API URL

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${API_URL}/songs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
};

export const fetchPlaylists = async () => {
    try {
        const response = await axios.get(`${API_URL}/playlists`);
        return response.data;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
};

export const fetchSongDetails = async (songId) => {
    try {
        const response = await axios.get(`${API_URL}/songs/${songId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching song details:', error);
        throw error;
    }
};