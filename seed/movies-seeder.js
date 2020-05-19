var Movieinfo = require('../models/infos');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/[movie1]', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

var movieinfo = [
    new Movieinfo({
        imagePath: 'https://bit.ly/2IcnSwz',
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Harry Potter and Dumbledores warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledores authority at Hogwarts and discredit Harry.'
    }),
    new Movieinfo({
        imagePath: 'https://bit.ly/2Pzczlb',
        title: 'Avengers: Endgame',
        description: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.'
    }),
    new Movieinfo({
        imagePath: 'https://www.visionvideo.com/img/product/large/L99942D.jpg',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        description: 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.'
    }),
];

var done = 0;
for (var i = 0; i < movieinfo.length; i++) {
    movieinfo[i].save(function (err, result) {
        done++;
        if (done === movieinfo.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
