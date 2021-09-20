const app = new Vue(
    {
        el: "#root",
        data: {
            discoverSicilyImage: "img/discover-sicily.png",
            altTextDiscoverSicily: "Discover Sicily image",
            images: [
                { src:"https://images.musement.com/cover/0002/52/cathedral-of-palermo-xl-jpg_header-151876.jpeg",
                  altText: "Palermo"
                },
                { src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/catania-cosa-vedere-1619507580.jpg",
                  altText: "Catania"
                },
                { src: "https://www.bravodriver.com/assets/img/italy/sicily/ragusa/ragusa_ibla.jpg",
                  altText: "Ragusa"
                },
                { src: "https://a.cdn-hotels.com/gdcs/production178/d1521/a0d859a0-5863-11e8-a5ee-0242ac110030.jpg",
                  altText: "Taormina"
                },
                { src:"https://media-cdn.tripadvisor.com/media/vr-splice-j/00/7d/e1/99.jpg",
                  altText: "San Vito Lo Capo"
                },
                { src: "https://www.eleonoraongaro.it/wp-content/uploads/2021/05/Biglietti-valle-dei-templi-Agrigento-1030x687.jpg",
                  altText: "Valle dei Templi"
                },
                { src: "https://www.labisialacarte.it/wp-content/uploads/2020/07/Cefal%C3%B9-primavera.jpg",
                  altText: "Cefalù"
                }
            ],
            imageCounter: 0,
            autoPlay: null
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
            },

            showCurrentImage: function(index){
                this.imageCounter = index;
            },
            stopAutoPlay: function(){
                clearInterval(this.autoPlay);
            }
        },

        mounted: function() {
                    this.autoPlay = setInterval(this.next, 3000);
                }     
    }
);