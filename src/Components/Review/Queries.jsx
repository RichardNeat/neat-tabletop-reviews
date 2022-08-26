import SortBy from "./Queries/SortBy";
import OrderBy from "./Queries/OrderBy";
import Limit from "./Queries/Limit";
import Page from "./Queries/Page";

export default function Queries ({sortBy, setSortBy, orderBy, setOrderBy, page, setPage, setLimit, totalPages, limit}) {

    return (
        <section className="queries">
            <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
            <OrderBy orderBy={orderBy} setOrderBy={setOrderBy}/>
            <Page page={page} setPage={setPage} totalPages={totalPages}/>
            <Limit limit={limit} setLimit={setLimit} setPage={setPage}/>
        </section>
    );
};