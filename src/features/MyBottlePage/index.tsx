import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebaseApp";


interface BgDataProps {
    id: string;
    category: string;
    imgUrl: string;
    key: number;
}

const MybottleSection = () => {
    console.log(auth);

    const [selectedFilters, setSelectedFilters] = useState<string[]>(["전체"]);
    const [bgData, setBgData] = useState<BgDataProps[]>([]);
    const filters = ["전체", "명언", "긍정확언", "힐링메시지"];

    const getBg = async () => {
        const datas = await getDocs(collection(db, "random-data"));

        datas?.forEach((doc) => {
            const dataObj = { ...doc.data(), id: doc.id };
            setBgData((prev) => [...prev, dataObj as BgDataProps]);
        });
    };

    useEffect(() => {
        getBg();
    }, []);


    console.log(bgData);


    const handleFilterClick = (selectedCategory: string) => {
        if (selectedCategory === "전체") {
            // 전체를 선택한 경우 모든 항목 보이기
            setSelectedFilters(["전체"]); // 초기 탭을 전체로 설정
        } else {
            // 선택한 탭 업데이트
            setSelectedFilters([selectedCategory]);
        }
    };

    const filteredData = selectedFilters.includes("전체")
        ? bgData
        : bgData.filter((item) => selectedFilters.includes(item.category));

    return (
        <Container>
            <Tab>
                {filters.map((category, idx) => (
                    <li
                        onClick={() => handleFilterClick(category)}
                        className={
                            (selectedFilters as string[]).includes(category)
                                ? "on"
                                : ""
                        }
                        key={`filters-${idx}`}
                    >
                        {category}
                    </li>
                ))}
            </Tab>

            <ListSec>
                <MyList>
                    {filteredData.map((item, idx) => (
                        <EachItem key={`items-${idx}`}>
                            <img src={item.imgUrl} alt={item.category} />
                        </EachItem>
                    ))}
                </MyList>
            </ListSec>
        </Container>
    );
};

const Container = styled.div`
    width: 31.9rem;
    margin: 0 auto;
`;

const Tab = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    li {
        cursor: pointer;
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.8);
    }

    li::after {
        content: "";
        display: none;
        width: 100%;
        height: 0.15rem;
        background-color: #fff;
        margin-top: 0.3rem;
    }

    li.on {
        font-size: 1.6rem;
        color: #fff;
    }

    li.on::after {
        font-size: 1.8rem;
        color: #fff;
        display: block;
    }
`;

const ListSec = styled.div`
    width: 100%;
    height: 73rem;
    height: calc(100vh - 19.6rem);
    overflow: auto;
    padding-bottom: 0.1rem;
`;

const MyList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const EachItem = styled.li`
    width: 8.5rem;
    height: 12rem;
    background-color: #dcdcdc;
    border-radius: 1.5rem;
    margin: 0 3.2rem 3rem 0;
    cursor: pointer;
    overflow: hidden;

    &:nth-child(3n) {
        margin-right: 0;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export default MybottleSection;
