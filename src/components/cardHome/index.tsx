import { cardsItems } from "../../cards";

export default function CardHome() {
  return (
    <div className="flex justify-between flex-wrap w-full h-full border border-[#DD7F10] px-8 gap-2">
      {cardsItems.map((item) => {
        return (
          <div className="w-[250px] h-60 rounded overflow-hidden shadow-lg mt-8 border">
            <div
              key={item.id}
              className="px-6 py-4 flex flex-col items-center justify-center w-full h-full gap-4"
            >
              <h4 className="font-bold text-xl mb-2 text-center">
                {item.title}
              </h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>

            {/* <img className="w-full" src="#" alt="Sunset in the mountains" /> */}
          </div>
        );
      })}
    </div>
  );
}
