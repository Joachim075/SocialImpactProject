import React, { useState } from "react";
import backgroundImage2 from './bg2.png';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";

export function SignUpPage({ onSignInClick }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nin, setNIN] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    console.log("Signing up with:", {
      fullName,
      email,
      nin,
      password,
      confirmPassword,
      agreeToTerms,
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Container */}
      <div
        className="flex-1 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
        }}
      ></div>

      {/* Form Container */}
      <div className="flex-1 border-r border-gray-300 p-10">
        <Paper radius={0} p={10} className="max-w-md mx-auto">
          <Title order={2} className="text-center mb-6">
            Create a Patient's Account
          </Title>

          <TextInput
            label="Full Name"
            placeholder="John Doe"
            size="md"
            className="mb-4"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            className="mb-4"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextInput
            label="NIN"
            placeholder="Your National Identification Number"
            size="md"
            className="mb-4"
            value={nin}
            onChange={(event) => setNIN(event.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            className="mb-4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            mt="md"
            size="md"
            className="mb-4"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <Checkbox
            label="I agree to the terms and conditions"
            mt="xl"
            size="md"
            className="mb-4"
            checked={agreeToTerms}
            onChange={(event) => setAgreeToTerms(event.target.checked)}
          />
          
         

        </Paper>
      </div>
    </div>
  );
}

export default SignUpPage;
