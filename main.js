const sectionContainer = document.querySelector('.section__container');
const arrayLibros = [];

arrayLibros.push({
    imageLibro: './libro1.jpg',
    nameLibro: '¡Sálvese quien pueda!',
});

arrayLibros.push({
    imageLibro: './libro2.jpeg',
    nameLibro: 'Cuentos Chinos',
});

arrayLibros.push({
    imageLibro: './libro3.jpg',
    nameLibro: 'Java 8',
});

arrayLibros.push({
    imageLibro: './libro4.png',
    nameLibro: 'Java, ¿Como Programar?',
});

function addLibros(arrayAdd) {
    for (libro of arrayAdd) {
        // Para crear variables de las etiquetas
        const sectionDiv = document.createElement('div');
        // Para agregarle una clase a dichas etiquetas
        sectionDiv.classList.add('section__div');
    
        const containerImg = document.createElement('div');
        containerImg.classList.add('container__img');
    
        const imgLibros = document.createElement('img');
        imgLibros.classList.add('img__libros');
        // para agregarles un atributo a las etuiquetas
        imgLibros.setAttribute('src', libro.imageLibro);
    
        const nameLibros = document.createElement('h3');
        nameLibros.classList.add('name__libros');
        // Para cambiar el texto (contenido) de lasetiquetas
        nameLibros.innerText = libro.nameLibro;
    
        // Se agregan las etiquetas hijas a las etiquetas padres
        containerImg.append(imgLibros, nameLibros);
        sectionDiv.appendChild(containerImg);
        sectionContainer.appendChild(sectionDiv);
    }
}

addLibros(arrayLibros);