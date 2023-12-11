
interface Props{
    onScroll: (i: number) => void
}

const Navigation = ({ onScroll }: Props) => {
  return (
    <nav className="sticky-top " >
        <h1>LOGO</h1>
        <section>
            <button onClick={() => onScroll(0)}>Home</button>
            <button onClick={() => onScroll(1)}>About</button>
            <button onClick={() => onScroll(2)}>Services</button>
            <button onClick={() => onScroll(3)}>Room</button>
            <button onClick={() => onScroll(4)}>Testimonial</button>
            <button onClick={() => onScroll(5)}>Blog</button>
            <button onClick={() => onScroll(6)}>Contaact</button>
        </section>
        <button>BOOK NOW</button>
    </nav>
  )
}

export default Navigation
