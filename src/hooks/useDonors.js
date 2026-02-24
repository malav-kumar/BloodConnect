import { useState, useEffect } from "react";
import { BLOOD_GROUPS, getRandom } from "../data/constants";

export function useDonors() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        const donorList = users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city, 
          bloodGroup: getRandom(BLOOD_GROUPS), 
          available: Math.random() > 0.35, 
        }));
        setDonors(donorList);
        setLoading(false);
      });
  }, []);

  return { donors, loading };
}