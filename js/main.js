const app = new Vue(
    {
        el: "#root",
        data: {
            discoverSicilyImage: "img/discover-sicily.png",
            altTextDiscoverSicily: "Discover Sicily image",
            images: ["https://images.musement.com/cover/0002/52/cathedral-of-palermo-xl-jpg_header-151876.jpeg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/catania-cosa-vedere-1619507580.jpg",
            "https://www.bravodriver.com/assets/img/italy/sicily/ragusa/ragusa_ibla.jpg",
            "https://a.cdn-hotels.com/gdcs/production178/d1521/a0d859a0-5863-11e8-a5ee-0242ac110030.jpg",
            "http://www.offertevacanzeinitalia.com/wp-content/uploads/2020/06/spiagge-della-sicilia-san-vito-lo-capo-foto-alex-brenko.jpg",
            "https://www.eleonoraongaro.it/wp-content/uploads/2021/05/Biglietti-valle-dei-templi-Agrigento-1030x687.jpg",
            "https://www.sicilia.info/wp-content/uploads/sites/91/cefalu-hd.jpg"],
            altTextImages: ["Palermo", "Catania", "Ragusa", "Taormina", "San Vito Lo Capo", "Valle dei Templi", "Cefalù"],
            imageCounter: 0
        },
        methods: {
            next: function() {
               this.imageCounter++; 
               if (this.imageCounter >= this.images.length) {
                    this.imageCounter = 0;
               }
            },

            previous: function(){
                this.imageCounter--;
                if (this.imageCounter < 0) {
                    this.imageCounter = this.images.length - 1;
                }
            },

            activeCircle: function(circleIndex){
                if (this.imageCounter == circleIndex) {
                    return "circle-active";
                }
                return "";
            }
        }
    }
);