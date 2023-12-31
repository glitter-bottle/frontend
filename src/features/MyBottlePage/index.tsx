import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseApp";
import useAuth from "../../hooks/useAuth";

interface BgDataProps {
    id: string;
    userId: string;
    userName: string;
    category: string;
    imgUrl: string;
    key: number;
}

const MybottleSection = () => {
    const navigate = useNavigate();
    const user = useAuth();
    const [selectedFilters, setSelectedFilters] = useState<string[]>(["전체"]);
    const [bgData, setBgData] = useState<BgDataProps[]>([]);
    const [loading, setLoading] = useState(true); // 추가: 로딩 상태를 관리
    const filters = ["전체", "명언", "긍정확언", "힐링메시지"];

    useEffect(() => {
        const getBg = async () => {
            setLoading(true); // 데이터를 불러올 때 로딩 상태 설정

            if (user) {
                const q = query(
                    collection(db, "user_collections"),
                    where("userId", "==", user.uid)
                );
                const querySnapshot = await getDocs(q);
                const dataArr: BgDataProps[] = [];

                querySnapshot.forEach((doc) => {
                    const dataObj = { ...doc.data() } as BgDataProps;
                    if (
                        selectedFilters.includes("전체") ||
                        selectedFilters.includes(dataObj.category)
                    ) {
                        dataArr.push(dataObj);
                    }
                });
                setBgData(dataArr);
                setLoading(false); // 데이터를 성공적으로 불러온 후 로딩 상태 해제
            }
        };

        if (user) {
            getBg();
        }
    }, [user, selectedFilters]);

    useEffect(() => {
        setSelectedFilters(["전체"]);
    }, []);


    const handleRandomWrappingClick = (selectedItem: BgDataProps) => {
        if (selectedItem) {
            navigate("/message-detail", {
                state: {
                    image: selectedItem.imgUrl,
                    key: selectedItem.key,
                },
            });
        }
    };

    const handleFilterClick = (selectedCategory: string) => {
        if (selectedCategory === "전체") {
            setSelectedFilters(["전체"]);
        } else {
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
                {loading ? ( // 로딩 중일 때 로딩 메시지 표시
                    <p>로딩 중...</p>
                ) : (
                    <MyList>
                        {filteredData.length === 0 ? ( // 데이터가 없을 때 메시지 표시
                            <p>담은 문장이 없습니다</p>
                        ) : (
                            filteredData.map((item, idx) => (
                                <EachItem
                                    key={`items-${idx}`}
                                    onClick={() =>
                                        handleRandomWrappingClick(item)
                                    }
                                >
                                    <img
                                        src={item.imgUrl}
                                        alt={item.category}
                                    />
                                </EachItem>
                            ))
                        )}
                    </MyList>
                )}
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

    p {
        text-align: center;
    }
`;

const MyList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    p {
        margin: auto;
    }
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
        height
    };
`;

export default MybottleSection;
