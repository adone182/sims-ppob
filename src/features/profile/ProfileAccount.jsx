import { AtSign, Pencil, User } from "lucide-react";
import { toast } from "react-toastify";
import { Button } from "../../components/atoms/Button";
import { Image } from "../../components/atoms/Image";
import { Label } from "../../components/atoms/Label";
import { InputForm } from "../../components/molecules/FormInput";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setProfile } from "./profileSlice";
import { getToken, logout } from "../auth/authSlice";

export const ProfileAccount = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const token = useSelector(getToken);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: profile?.first_name || "",
    last_name: profile?.last_name || "",
    email: profile?.email || "",
    profile_image: profile?.profile_image || "",
  });

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        email: profile.email || "",
        profile_image: profile.profile_image || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > 100 * 1024) {
        setFileError("Ukuran file harus kurang dari 100 KB");
        toast.error("Ukuran file harus kurang dari 100 KB");
        return;
      }

      setFileError("");

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(`${baseUrl}/profile/image`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await response.json();

        if (data.status === 0 && data.data.profile_image) {
          setFormData((prevData) => ({
            ...prevData,
            profile_image: data.data.profile_image,
          }));
          dispatch(setProfile(data.data));
          toast.success(data.message);
        } else {
          setFileError("Gagal mengupdate gambar profil");
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error updating profile picture:", error);
        setFileError("Gagal mengupload gambar");
        toast.error("Gagal mengupload gambar");
      }
    }
  };

  const handleEditImage = () => {
    fileInputRef.current.click();
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      email: profile?.email || "",
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await fetch(`${baseUrl}/profile/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === 0) {
        dispatch(setProfile(data.data));
        setIsEditing(false);
        toast.success(data.message);
      } else {
        dispatch(setError(data.message));
        toast.error(data.message);
      }
    } catch (err) {
      dispatch(setError(err.message));
      toast.error(err.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <section className="px-20 pt-20">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <div className="relative">
          <Image
            imageSrc={
              formData.profile_image || "/src/assets/default-profile.png"
            }
            altImg="Profile"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <Button
            classname="absolute bg-white border border-gray-400 bottom-0 right-[-5px] p-1 rounded-full shadow-md"
            onClick={handleEditImage}
          >
            <Pencil size={12} className="text-gray-600" />
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {fileError && <p className="text-red-500">{fileError}</p>}

        <h2 className="text-xl font-semibold mt-4">
          {formData.first_name} {formData.last_name}
        </h2>

        <form onSubmit={handleSave} className="w-full max-w-md mt-5">
          <div className="mb-3">
            <Label htmlFor="email">Email</Label>
            <InputForm
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              icon={<AtSign size={16} />}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-3">
            <Label htmlFor="first_name">Nama Depan</Label>
            <InputForm
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              icon={<User size={16} />}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-3">
            <Label htmlFor="last_name">Nama Belakang</Label>
            <InputForm
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
              icon={<User size={16} />}
              disabled={!isEditing}
            />
          </div>

          <div className="mt-5">
            {isEditing ? (
              <>
                <Button
                  type="submit"
                  classname="w-full border border-red-500 text-red-500 py-2 mt-4 rounded-sm"
                >
                  Simpan
                </Button>

                <Button
                  classname="w-full flex items-center justify-center gap-2 py-2 mt-3 bg-red-500 text-white rounded-sm"
                  onClick={handleCancel}
                >
                  Batalkan
                </Button>
              </>
            ) : (
              <>
                <Button
                  classname="w-full border border-red-500 text-red-500 py-2 mt-4 rounded-sm"
                  onClick={handleEdit}
                >
                  Edit Profile
                </Button>

                <Button
                  classname="w-full flex items-center justify-center gap-2 py-2 mt-3 bg-red-500 text-white rounded-sm"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
