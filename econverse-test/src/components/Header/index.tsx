import './styles.scss';
import Logo from '../../assets/images/Logo.png';
import searchIcon from '../../assets/icons/MagnifyingGlass.svg';
import userIcon from '../../assets/icons/UserCircle.svg';
import heartIcon from '../../assets/icons/Heart.svg';
import cartIcon from '../../assets/icons/ShoppingCart.svg';
import estoqueIcon from '../../assets/icons/estoque.svg';
import shieldcheck from '../../assets/icons/ShieldCheck.png';
import truck from '../../assets/icons/Truck.png';
import creditcard from '../../assets/icons/CreditCard.png';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <p><img src={shieldcheck} alt="Estoque" /> Compra <span className='purple-bold'>100% segura</span></p>
        <p><img src={truck} alt="Estoque" /><span className='purple-bold'>Frete grátis</span> acima de R$200</p>
        <p><img src={creditcard} alt="Estoque" /><span className='purple-bold'>Parcele</span> suas compras</p>
      </div>

      <div className="header__main">
        <h1 className="header__logo"><img src={Logo} alt="econverse" /></h1>

      <div className="header__search">
          <input type="text" placeholder="O que você está buscando?" />
          <img src={searchIcon} alt="Buscar" />
      </div>

        <nav className='header__icons'>

          <img src={estoqueIcon} alt="Estoque" />
          <img src={userIcon} alt="Usuário" />
          <img src={heartIcon} alt="Favoritos" />
          <img src={cartIcon} alt="Carrinho" />
        </nav>
      </div>

      <div className="header__menu">
        <a href="#">TODAS AS CATEGORIAS</a>
        <a href="#">SUPERMERCADO</a>
        <a href="#">LIVROS</a>
        <a href="#">MODA</a>
        <a href="#">LANÇAMENTOS</a>
        <a href="#">OFERTAS DO DIA</a>
        <a href="#">ASSINATURA</a>
      </div>
    </header>
  )
}

export default Header;