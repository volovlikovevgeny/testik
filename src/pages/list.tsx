import React, { ReactElement, useState, useEffect } from 'react';

import Link from 'next/link';


const List = (): ReactElement => {

    const [owner, setOwnerList] = useState([]);


    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('http://localhost:4001/vehicles');
            const ownerList = await response.json();
            setOwnerList(ownerList);
        };

        loadData();
    }, []);



    return (
        <div>
            {/* {
                owners.map(({ vehicles, name }, index) => {
                    return (
                        <div key={index}>
                            <Link
                                href={`/${vehicles}/${name}`}>
                                <a>Navigate to {name}`s {vehicles}  </a>
                            </Link>
                        </div>
                    );
                })
            } */}

        </div>
    );
};

export default List;
