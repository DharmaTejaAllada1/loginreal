import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const Slide169OnePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sarabun items-center justify-end mx-auto pt-[63px] w-full">
        <div className="flex flex-col md:gap-10 gap-36 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1512px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[153px] w-[54%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtSarabunBold50"
              >
                <span className="text-black-900 font-sarabun text-left font-bold">
                  <>
                    Welcome to <br />
                  </>
                </span>
                <span className="md:text-5xl text-black-900 font-sarabun text-left text-6xl font-bold">
                  [Your Platform Name]
                </span>
              </Text>
              <Text
                className="leading-[40.00px] mt-5 text-black-900 text-lg"
                size="txtSarabunRegular18"
              >
                <>
                  Here, we believe that building a strong professional network
                  begins with your participation. <br />
                  We are delighted to offer a modern and user-friendly service
                  to ensure you have the best experience.
                </>
              </Text>
              <Text
                className="mt-1.5 text-indigo-A400 text-xl"
                size="txtSarabunBold20"
              >
                Join Now!
              </Text>
              <Img
                className="h-[370px] mt-3.5"
                src="images/img_frame.svg"
                alt="frame"
              />
            </div>
            <div className="flex md:flex-1 flex-col font-inter md:gap-10 gap-[163px] items-end justify-start mb-[73px] w-[27%] md:w-full">
              <div className="flex flex-row items-start justify-end w-[91%] md:w-full">
                <Text
                  className="mt-2.5 text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  English
                </Text>
                <CheckBox
                  className="font-bold leading-[normal] ml-[5px] mt-[9px] md:pl-10 sm:pl-5 text-indigo-A400 text-left text-xl"
                  inputClassName="mr-[5px]"
                  name="signin"
                  id="signin"
                  label="Sign in"
                ></CheckBox>
                <Button
                  className="border border-gray-300 border-solid cursor-pointer h-[42px] leading-[normal] ml-8 text-center text-xl w-[129px]"
                  shape="round"
                  size="xs"
                >
                  Register
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterBold25"
                >
                  Sign in
                </Text>
                <Input
                  name="textfieldoutlin"
                  placeholder="Enter Email or Phone"
                  className="font-inter font-medium p-0 placeholder:text-gray-800_01 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="mt-8 w-full"
                  type="email"
                  size="sm"
                ></Input>
                <Input
                  name="textfieldoutlin_One"
                  placeholder="Password"
                  className="font-inter font-medium p-0 placeholder:text-gray-800_01 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="flex mt-[27px] w-[400px] sm:w-full"
                  type="password"
                  suffix={
                    <Img
                      className="h-[25px] ml-[35px] my-auto"
                      src="images/img_fluenteye20filled.svg"
                      alt="fluent:eye-20-filled"
                    />
                  }
                ></Input>
                <Text
                  className="md:ml-[0] ml-[247px] mt-[23px] text-base text-gray-600"
                  size="txtInterRegular16"
                >
                  Recover Password ?
                </Text>
                <Button
                  className="cursor-pointer font-bold font-kanit leading-[normal] min-w-[400px] sm:min-w-full mt-[53px] rounded-[10px] text-base text-center"
                  color="indigo_A400"
                  size="sm"
                >
                  Sign in
                </Button>
                <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between mt-[49px] w-full">
                  <Line className="bg-gray-300_02 h-px sm:mt-0 my-[9px] w-[32%]" />
                  <Text
                    className="text-base text-gray-600"
                    size="txtInterRegular16"
                  >
                    Or Continue wuth
                  </Text>
                  <Line className="bg-gray-300_02 h-px sm:mt-0 my-[9px] w-[32%]" />
                </div>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[41px] mt-[50px] w-4/5 md:w-full">
                  <Button
                    className="common-pointer border border-gray-300 border-solid flex h-[61px] items-center justify-center w-[61px]"
                    onClick={() => googleSignIn()}
                    shape="round"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  </Button>
                  <Button
                    className="border border-gray-300 border-solid flex items-center justify-center ml-[25px] w-[62px]"
                    shape="round"
                  >
                    <Img src="images/img_trash.svg" alt="trash" />
                  </Button>
                  <Button
                    className="border border-gray-300 border-solid flex h-[61px] items-center justify-center ml-[25px] w-[61px]"
                    shape="round"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="border border-gray-300 border-solid flex items-center justify-center ml-[25px] w-[19%]"
                    shape="round"
                  >
                    <Img src="images/img_logo.svg" alt="logo" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-white-A700 flex items-center justify-center md:px-5 shadow-bs1 w-full">
            <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-52 mr-[200px] my-[18px] w-[79%] md:w-full common-column-list">
              <li>
                <a href="javascript:">
                  <Img
                    className="h-4 md:h-auto object-cover"
                    src="images/img_group.png"
                    alt="group"
                  />
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-2 md:ml-[0] text-gray-800_01 text-sm"
                >
                  <Text size="txtSarabunLight14">© 2024 </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[711px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">About</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[31px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">Terms of Use</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[31px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">Privacy Policy</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[31px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">Cookie Policy</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[31px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">Copyright Policy</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[31px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">Brand Policy</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[31px] text-black-900 text-sm"
                >
                  <Text size="txtSarabunLight14Black900">Visitor Controls</Text>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Slide169OnePage;
