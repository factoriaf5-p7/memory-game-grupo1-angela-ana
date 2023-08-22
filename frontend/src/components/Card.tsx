export interface CardProps {
    name: string;
    img: string;
}

function Card({ name, img }: CardProps) {
  return (
    <div>
        <img src={img} alt={name} />
        <p>{name}</p>
    </div>
  )
}

export default Card