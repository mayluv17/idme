import React, { FC, useState, useMemo } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { supabase } from "../lib/api";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

interface CreateBusinessProps {}
interface formData {
  businessname: string;
  website: string;
  address: string;
}
const CreateBusiness: FC<CreateBusinessProps> = ({}) => {
  const [formData, setFormData] = useState<formData>({
    businessname: "",
    website: "",
    address: "",
  });
  const [isLogoUploaded, setIsLogoUploaded] = useState<boolean>(false);
  const businessUid = useMemo(() => uuidv4(), []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const logo: File = (e.target.files as FileList)[0];
    const fileUid = uuidv4();
    const { data, error } = await supabase.storage
      .from("businessLogo")
      .upload(`public/${businessUid}/${fileUid}.jpg`, logo, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      toast.error(error.message);
      setIsLogoUploaded(false);
    }
    if (data) {
      toast.success("Succefully uploaded image");
      setIsLogoUploaded(true);
    }
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitBusiness = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
    // console.log(user);
    const { error } = await supabase.from("business_name").insert(formData);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Business Successfully created!");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="md:w-[640px] mt-28 rounded-sm border shadow items-center">
          <div className="flex flex-col p-6 space-y-1">
            <h3 className="font-semibold tracking-tight text-2xl">
              Setup Business
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter your business details below.
            </p>
          </div>
          <form>
          <div className="p-6 pt-0 grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="logo"
                >
                  Upload Company Logo
                </label>
                <Input
                  className="flex h-9 w-full rounded-md border border-Input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="logo"
                  type="file"
                  name="logo"
                  onChange={(e) => handleUpload(e)}
                  required
                />
              </div>
              <div className="">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="businessname"
                >
                  Business Name
                </label>
                <Input
                  className="flex h-9 w-full rounded-md border border-Input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="businessname"
                  type="text"
                  name="businessname"
                  disabled={!isLogoUploaded}
                  onChange={(e) => handleForm(e)}
                  required
                  value={formData.businessname}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="website"
                >
                  Website
                </label>
                <Input
                  className="flex h-9 w-full rounded-md border border-Input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="website"
                  type="text"
                  name="website"
                  placeholder="www.businesswebsite.com"
                  disabled={!isLogoUploaded}
                  onChange={(e) => handleForm(e)}
                  value={formData.website}
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="address"
                >
                  Address
                </label>
                <Input
                  className="flex h-9 w-full rounded-md border border-Input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="address"
                  type="text"
                  name="address"
                  disabled={!isLogoUploaded}
                  onChange={(e) => handleForm(e)}
                  // value={registrationInput.username}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <Button
              onClick={(e) => submitBusiness(e)}
              type="submit"
              variant={"default"}
              className="h-9 px-4 py-2 w-full"
            >
              Setup Business
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBusiness;
