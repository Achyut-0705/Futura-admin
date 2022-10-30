import { useEffect, useState } from "react";
import RequestCard from "../components/RequestCard";
import styles from "../styles/RejectedRequests.module.scss";
import instance from "../utils/axios";

const getPendingRequests = async () => {
  const { data } = await instance.get("/company/status/rejected");
  return data;
};

function RejectedRequest() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      getPendingRequests()
        .then(({ companies: { rows } }) => setData(rows))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.searchBarWrapper}>
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("searching for", search);
              return;
            }
          }}
        />
      </div>
      <div className={styles.requestsWrapper}>
        {data.length > 0 ? (
          data.map((company) => (
            <RequestCard key={company.id} company={company} />
          ))
        ) : (
          <div className={styles.noData}>No data found</div>
        )}
      </div>
    </div>
  );
}

export default RejectedRequest;
