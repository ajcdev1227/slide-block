import React, {useEffect, useState, forwardRef, useImperativeHandle} from 'react';
import Group from './Group';

const Container = forwardRef(({cardsInfo, curIndex, setCurIndex, curSubIndex, setCurSubIndex, setModalShow}, ref) => {
    const [translateX, setTranslateX] = useState(296);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [maxTranslateX, setMaxTranslateX] = useState(0);

    useImperativeHandle(ref, () => setTranslateX);

    useEffect(() => {
        let initialTranslateX = 296;
        for (let i = 0; i < cardsInfo.length - 1; i++) {
            initialTranslateX += 336 + 480 * cardsInfo[i].cardInfo.length;
        }
        initialTranslateX += 480 * (cardsInfo[cardsInfo.length - 1].cardInfo.length - 1);
        setMaxTranslateX(initialTranslateX);
    }, [cardsInfo]);

    useEffect(() => {
        let initialTranslateX = 0;
        let i, j;
        for (i = 0; i < cardsInfo.length; i++) {
            initialTranslateX += (i < 3) ? 296 : 800;
            if (translateX <= initialTranslateX) {
                setCurIndex(i);
                setCurSubIndex(0);
                break;
            }
            for (j = 0; j < cardsInfo[i].cardInfo.length; j++) {
                initialTranslateX += 480 * j;
                if (translateX <= initialTranslateX) {
                    break;
                }
            }
            if (j < cardsInfo[i].cardInfo.length) {
                setCurIndex(i);
                setCurSubIndex(j);
                break;
            }
            initialTranslateX += 40;
        }
    }, [translateX]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX;
        setStartX(e.clientX);
        setTranslateX((prev) => Math.min(maxTranslateX, Math.max(296, prev - diff)));
    };

    const handleScroll = (e) => {
        setTranslateX((prev) => {
            const sensitivity = 1.5;
            const nextTranslateX = prev + e.deltaY * sensitivity;
            return Math.min(Math.max(nextTranslateX, 296), maxTranslateX);
        });
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
        document.body.style.userSelect = "";
    };

    return (

        <div className="flex flex-col bg-white flex-grow justify-center max-h-[610px] h-[calc(100%-100px)]">
            <div className="relative flex flex-row h-full ml-[102px] overflow-hidden"
                 onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
                 onMouseLeave={handleMouseUp}>
                <div className="absolute left-0 top-0 flex flex-col justify-center items-center gap-[8px] h-full pr-[120px] bg-white z-50">
                    <img src={cardsInfo[curIndex].src} alt={cardsInfo[curIndex].title} className="w-auto h-auto max-w-none"/>
                    {curIndex !== 3 && (
                        <span className="text-[#777] font-montserrat text-[15.454px] font-normal leading-[160%] text-center">{cardsInfo[curIndex].title}</span>
                    )}
                </div>
                <div className="flex flex-row gap-[120px] transition-transform duration-[2000ms] ml-[296px]"
                     style={{
                         transform: `translateX(-${translateX}px)`
                     }}>
                    {cardsInfo.map((card, index) => (
                        <Group
                            info={card}
                            key={index}
                            cardIndex={index}
                            curSubIndex={curSubIndex}
                            curIndex={curIndex}
                            setCurIndex={setCurIndex}
                            setCurSubIndex={setCurSubIndex}
                            setModalShow={setModalShow}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
})

export default Container;
