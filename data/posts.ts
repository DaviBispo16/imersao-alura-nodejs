interface Post {
    id: string,
    description: string,
    image: string,
};


export const posts: Post[] = [
    {
        id: 'c1f7e907-d218-4565-ab8f-58c49592d2dd',
        description: "A breathtaking view of the Grand Canyon...",
        image: "https://images.app.goo.gl/Bx2jRrBcvyBr1tFS8"
    },
    {
        id: 'c1f7e907-d218-4565-ab8f1131231-58c49592d221d',
        description: "Uma cachoeira imponente se precipitando em um vale verdejante",
        image: "https://images.app.goo.gl/Bx2jRrBcvyBr1tFS8"
    },
]

export function findById(id:string): Post | undefined {
    return posts.find((post) => post.id === id);
}