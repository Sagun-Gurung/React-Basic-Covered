import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

let SweetAlert = async (getFunc, url) => {
  const MySwal = withReactContent(Swal);

  try {
    let result = await MySwal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
    });
    // console.log(result)

    if (result.isConfirmed === true) {
      let result = await axios({
        url: url,
        method: "delete",
      });
      // console.log(result)
      // if we have to hit api twice then it is called invalidation
      getFunc();
      toast(result.data.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default SweetAlert;
