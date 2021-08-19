import axios from "axios";

const apiUrl = "https://api.github.com";

export const fetchBranches = async (owner, repository) => {
  try {
    const data = (
      await axios.get(`${apiUrl}/repos/${owner}/${repository}/branches`)
    ).data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
