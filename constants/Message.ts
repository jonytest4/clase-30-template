//propiedades que va obtener el objeto para el apartado del chatBot
//interface de tipo
interface Message{
    id: number;
    message: string;
    type: "user" | "assistant"
}