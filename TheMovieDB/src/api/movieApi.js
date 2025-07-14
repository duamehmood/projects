const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTdjYzNkMTJkOTM5MDllNmRjNjY2OTMwZDI5MGFhYSIsIm5iZiI6MTc0NzQ1Njg1OS43MDQsInN1YiI6IjY4MjgxMzViZjVhNGY0ZWFjODBiY2M2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QYoYlzi_N2Mjj_0Izy_AJc09eDXOzNQJZ0G7OHuCPuE';
export async function getPopularMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during API call:', error);
        throw error;
    }
}

export async function getMovieDetail(movieId) { 
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during API call:', error);
        throw error;
    }
}

