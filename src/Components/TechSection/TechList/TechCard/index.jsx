export const TechCard = ({ technology }) => {
    return (
        <li>
            <img src={technology.img} alt={technology.name} />
        </li>
    )
}