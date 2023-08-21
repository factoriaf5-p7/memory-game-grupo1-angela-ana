import { cards } from '../../data/data.ts'; // Asegúrate de proporcionar la ruta correcta

describe('Cards Data', () => {
  it('should contain expected cards data', () => {
    const expectedData = [
        
            { name: "aquaman", img: "aquaman.jpg" },
            { name: "batman", img: "batman.jpg" },
            { name: "captain america", img: "captain-america.jpg" },
            { name: "fantastic four", img: "fantastic-four.jpg" },
            { name: "flash", img: "flash.jpg" },
            { name: "green arrow", img: "green-arrow.jpg" },
            { name: "green lantern", img: "green-lantern.jpg" },
            { name: "ironman", img: "ironman.jpg" },
            { name: "spiderman", img: "spiderman.jpg" },
            { name: "superman", img: "superman.jpg" },
            { name: "the avengers", img: "the-avengers.jpg" },
            { name: "thor", img: "thor.jpg" },
            { name: "aquaman", img: "aquaman.jpg" },
            { name: "batman", img: "batman.jpg" },
            { name: "captain america", img: "captain-america.jpg" },
            { name: "fantastic four", img: "fantastic-four.jpg" },
            { name: "flash", img: "flash.jpg" },
            { name: "green arrow", img: "green-arrow.jpg" },
            { name: "green lantern", img: "green-lantern.jpg" },
            { name: "ironman", img: "ironman.jpg" },
            { name: "spiderman", img: "spiderman.jpg" },
            { name: "superman", img: "superman.jpg" },
            { name: "the avengers", img: "the-avengers.jpg" },
            { name: "thor", img: "thor.jpg" }
          
          
    ];

    expect(cards).toEqual(expectedData);
  });
});