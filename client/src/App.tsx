import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import BetaBanner from "./Components/BetaBanner";
import ExternalLink from "./Components/ExternalLink";
import {DefaultErrorBoundary} from "./Components/DefaultErrorBoundary";
import {ErrorBoundary} from "./Components/ErrorBoundary";
import {field_period_to_text} from "./Functions";


interface State {
    list: string[]
}

interface ListItem {
    name: string
    link: string
}


function App() {

    useEffect(() => {
        getList()
    }, []);


    let [list, setList] = useState<any[]>([]);

    function getList() {
        fetch('/api/getList')
            .then((r: Response) => (
                    r.json()
                        .then((json: ListItem[]) => {
                                console.log("Set List")
                                console.log(json)
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
        <>
            <BetaBanner/>
            <Header/>
            <div className="page__container container ">
                <main id="main-content" className="page__main ">
                    <DefaultErrorBoundary>

                        <h1>Title</h1>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>

                        <table id="basic-table" className="table ">
                            <caption className="table__caption">A basic table with a caption</caption>
                            <ErrorBoundary errorMessageText={"Unable to load table correctly"}>
                                <thead className="table__head">
                                <tr className="table__row">
                                    <th scope="col" className="table__header ">
                                        <span>Column A</span>
                                    </th>
                                    <th scope="col" className="table__header ">
                                        <span>Column B</span>
                                    </th>
                                    <th scope="col" className="table__header ">
                                        <span>Column C</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="table__body">

                                {
                                    list && list.length > 0
                                        ?
                                        list.map((item: ListItem) => {
                                            return (
                                                <tr className="table__row" key={item.name}>
                                                    <td className="table__cell ">
                                                        {item.name}
                                                    </td>
                                                    <td className="table__cell ">
                                                        {field_period_to_text(item.name)}
                                                    </td>
                                                    <td className="table__cell ">
                                                        <ExternalLink item={item.name} link={"/" + item.link}/>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td className="table__cell " colSpan={2}>
                                                No items found
                                            </td>

                                        </tr>
                                }

                                </tbody>
                            </ErrorBoundary>
                        </table>
                    </DefaultErrorBoundary>
                </main>
            </div>
        </>
    );
}

export default App;
