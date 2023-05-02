

export const Cards = ({toy}) => {
  return(
    <div className="flex-container-for-toy-cards__toy-card">
        <span className="toy-card toy-card_name font font__neucha  font__neucha_18px">
          {toy.name}
        </span>
        <img src={toy.image} alt="" />

        <span className="toy-card toy-card_count">          
          Количество: {toy.count}
        </span>
        <span className="toy-card toy-card_year">Год покупки: {toy.year}</span>
        <span className="toy-card toy-card_shape">
          {" "}
          Форма игрушки: {toy.shape}
        </span>
        <span className="toy-card toy-card_color">
          Цвет игрушки: {toy.color}
        </span>
        <span className="toy-card toy-card_size">
          Размер игрушки: {toy.size}
        </span>
        <span className="toy-card toy-card_do-like">Любимая: </span>
      </div>
  )
}