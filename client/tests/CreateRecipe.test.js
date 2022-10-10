import PostRecipes from "../src/components/PostRecipes";

let props = {
    id: 'ef79414f-7491-4eaf-9a7e-f5ebd704def7',
    diets: ['hola', 'que', 'tal'],
    name: 'Leandro'
}

xdescribe("Estructura", () => {
    xit('Debería renderizar un "button"', () => {
      expect(houseCard(houses[0]).find("button")).toHaveLength(1);
    });

xit('Debería renderizar un "h2" que diga "Nombre: Leandro"', () => {
    expect(PostRecipes(props).find("h2").at(0).text()).toBe(
      "Nombre: Leandro"
    );

})
});