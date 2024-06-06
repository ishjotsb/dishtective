import burger from "../assets/burger.svg";
import coffee from "../assets/cofee.svg";
import cake from "../assets/cake.svg";
import pizza from "../assets/pizza.svg";
import avatar_thinking_1 from "../assets/Avatar_Thinking.svg";
import avatar_thinking_2 from "../assets/Avatar_Thinking_6.svg";

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="grid grid-cols-2 px-16 py-8 gap-4 items-center text-[#6B4A31]">
        <div className="py-2 grid grid-rows-[max-content_max-content_max-content] gap-4">
            <h2 className="font-caveat text-9xl font-extrabold">Time to Cook!</h2>
            <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea saepe fuga laborum consequatur deleniti autem cumque aspernatur nemo, officiis enim atque sint inventore, quos quaerat.</p>
            <Link to="/add-ingredients" className="inline bg-[#6B4A31] py-2 px-4 text-white rounded-md w=[100px]">Get Started
            </Link>
        </div>
        <div className="grid grid-cols-[300px_300px] grid-rows-[max-content_max-content_1fr] gap-4">
            <img src={coffee} alt="Coffee" className="h-[150px] justify-self-center" />
            <img src={burger} alt="Burger" className="h-[150px] justify-self-center" />
            <img src={pizza} alt="Cookies" className="h-[150px] justify-self-end self-start" />
            <img src={cake} alt="Cake" className="h-[150px]" />
            <img src={avatar_thinking_2} alt="Person thinking 2" className="justify-self-end" />
            <img src={avatar_thinking_1} alt="Person thinking 1" className="self-end" />
        </div>
    </section>
  )
}
