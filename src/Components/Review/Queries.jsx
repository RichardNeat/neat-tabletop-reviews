import SortBy from "./Queries/SortBy";
import OrderBy from "./Queries/OrderBy";
import Limit from "./Queries/Limit";
import Page from "./Queries/Page";

export default function Queries ({setSortBy, setOrderBy, setPage, setLimit, totalPages, limit}) {

    return (
        <section className="queries">
            <SortBy setSortBy={setSortBy}/>
            <OrderBy setOrderBy={setOrderBy}/>
            <Page setPage={setPage} totalPages={totalPages}/>
            <Limit limit={limit} setLimit={setLimit} setPage={setPage}/>
        </section>
    );
};