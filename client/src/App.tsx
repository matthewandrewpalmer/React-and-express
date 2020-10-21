import React, {useEffect, useState} from 'react';
import Header from "./Header";
import BetaBanner from "./BetaBanner";
import ExternalLink from "./ExternalLink";


interface State {
    list: string[]
}


function App() {

    useEffect(() => {
        getList()
    }, []);


    let [list, setList] = useState<string[]>([]);

    function getList() {
        fetch('/api/getList')
            .then((r: any) => (
                    r.json()
                        .then((json: string[]) => {
                                console.log("Set List")
                                setList(json)
                            }
                        ).catch((error: any) => (
                        console.error("Unable to read json from response")
                    ))
                ).catch((error: any) => (
                    console.error("Failed to call api /api/getList" + error)
                )
                )
            )
    }


    return (
        <div className="App">
            <BetaBanner/>
            <Header/>
            <div className="page__container container ">
                <main id="main-content" className="page__main ">
                    <h1>Title</h1>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>

                    <table id="basic-table" className="table ">
                        <caption className="table__caption">A basic table with a caption</caption>
                        <thead className="table__head">
                        <tr className="table__row">
                            <th scope="col" className="table__header ">
                                <span>Column A</span>
                            </th>
                            <th scope="col" className="table__header ">
                                <span>Column B</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="table__body">
                        {
                            list && list.length > 0
                                ?
                                list.map((item) => {
                                    return (
                                        <tr className="table__row">
                                            <td className="table__cell ">
                                                {item}
                                            </td>
                                            <td className="table__cell ">
                                                <ExternalLink item={item} link={"/" + item}/>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <p>No items found</p>
                        }
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
}

export default App;
