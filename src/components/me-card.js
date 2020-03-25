/* becodeorg/stream
 *
 * /src/components/me-card.js - MeCard Component
 *
 * coded by leny@BeCode
 * started at 25/03/2020
 */

/* eslint-disable no-shadow */

import React, {useMemo} from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import {Image} from "react-bootstrap";

const GET_ME = gql`
    query consumer {
        consumer {
            type
            owner {
                ... on Coach {
                    name
                    age
                    avatar
                    promos {
                        displayname
                        juniors {
                            totalCount
                        }
                        school {
                            name
                        }
                    }
                }
            }
        }
    }
`;

const MeCard = () => {
    const {loading, error, data} = useQuery(GET_ME);

    const {
        name,
        age,
        avatar,
        schoolName,
        promoName,
        juniorsCount,
    } = useMemo(() => {
        if (!data) {
            return {};
        }

        const {
            consumer: {
                owner: {
                    name,
                    age,
                    avatar,
                    promos: [
                        {
                            school: {name: schoolName},
                            displayname: promoName,
                            juniors: {totalCount: juniorsCount},
                        },
                    ],
                },
            },
        } = data;

        return {name, age, avatar, schoolName, promoName, juniorsCount};
    }, [data]);

    if (loading) {
        return <p>{"I'm loading it, please be patient…"}</p>;
    }

    if (error) {
        return <p>{`Oops, there was an error: ${error}`}</p>;
    }

    return (
        <div>
            <p>{"Ok, I am:"}</p>

            <Image src={avatar} thumbnail />

            <p>
                <strong>{name}</strong>
                {`, ${age}, in ${schoolName}, coach for the ${juniorsCount} juniors in ${promoName} promo.`}
            </p>
        </div>
    );
};

export default MeCard;
