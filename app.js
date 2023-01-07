let genres = ['Fantasy', 'Science Fiction','Dystopian','Action and Adventure', 'Mystery', 'Horror','Thriller and Suspense','Historical Fiction','Romance','Women\’s Fiction','LGBTQ+', 'Contemporary Fiction', 'Literary Fiction','Magical Realism', 'Graphic Novel', 'Short Story', 'Young Adult', 'New Adult', 'Memoir & Autobiography', 'Biography', 'Self-Help', 'True Crime', 'Humor', 'History'];

function newGenre() {
    const randomGenre = Math.floor(Math.random() * (genres.length));
    document.getElementById('random-genre').innerHTML = genres[randomGenre];
}