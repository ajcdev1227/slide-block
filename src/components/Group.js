import React from 'react';
import Card from "./Card";

const Group = ({info, cardIndex, curIndex, curSubIndex, setCurSubIndex, setCurIndex, setModalShow}) => {
    return (
        <>
            <div className="h-full flex flex-row">
                <div className="flex flex-col justify-center items-center gap-[8px] h-full pr-[120px] bg-white z-50">
                    <img src={info.src} alt={info.title} className="w-auto h-auto max-w-none"/>
                    {cardIndex !== 3 && (
                        <span className="text-[#777] font-montserrat text-[15.454px] font-normal leading-[160%] text-center">{info.title}</span>
                    )}
                </div>
                <div className="flex flex-row gap-[80px]">
                    {info.cardInfo.map((card, subIndex) => (
                        <Card
                            key={subIndex}
                            src={card.src}
                            title={card.title}
                            index={subIndex}
                            cardIndex={cardIndex}
                            curIndex={curIndex}
                            curSubIndex={curSubIndex}
                            setCurSubIndex={setCurSubIndex}
                            setCurIndex={setCurIndex}
                            setModalShow={setModalShow}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Group;
