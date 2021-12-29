const user = {
  name: "Ash",
  lastName: "Ketchum",
  avatar: "./ash.jpg",
  bio: "Tengo 10 años y mi sueño es convertime en maestro pokemon. Actualmente viajo con Pikachu y Go.",
  city: "Pueblo Paleta",
  social: [150, 160, 130, 255],
};

function User({ name, lastName, avatar, city, bio, social }) {
  const [twitter, facebook, instagram, tiktok] = social;
  return `
          <div class="user">
            <img src="${avatar}" alt="${name}" width="140" height="140" />
            <div class="details">
              <p>${name} ${lastName}</p>
            </div>
            <p class="city"><em>${city}</em></p>
            <div class="social">
              <p>${twitter}</p>
              <p>${facebook}</p>
              <p>${instagram}</p>
              <p>${tiktok}</p>
            </div>
            <div class="bio">
              <p>${bio}</p>
            </div>
          </div>
  `;
}

window.user.innerHTML = User(user);
