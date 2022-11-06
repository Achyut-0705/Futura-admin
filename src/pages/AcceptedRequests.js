import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import RequestCard from "../components/RequestCard";
import styles from "../styles/AcceptedRequests.module.scss";
import instance from "../utils/axios";
import { success, error } from "../utils/Toasties";

function AcceptedRequest() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getPendingRequests = async () => {
    try {
      const { data } = await instance.get("/company/status/accepted");
      console.log(data);
      return data;
    } catch (err) {
      error(err.message);
    }
  };

  const moveToPending = async (id) => {
    try {
      await instance.patch(`/company/status/${id}`, {
        status: "pending",
      });
      // console.log(companies);
      setData((val) => {
        const updatedData = val.filter((company) => company.id !== id);
        return updatedData;
      });

      success("Company moved to pending successfully");
    } catch (err) {
      error(err.message);
    }
  };

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
    <>
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
              <RequestCard
                key={company.id}
                company={company}
                type="accepted"
                name={company.name}
                onMoveToPending={() => moveToPending(company.id)}
              />
            ))
          ) : (
            <div className={styles.noData}>No data found</div>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default AcceptedRequest;
