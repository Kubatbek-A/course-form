import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "@/UI/Button/Button";
import Checkbox from "@/UI/Checkbox/Checkbox";
import Input from "@/UI/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useCreateUser } from "@/hooks/useCreateUser";
import { useRouter } from "next/router";

const DetailsFormWrapper = styled.div``;

const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CheckboxFieldWrapper = styled.div`
  margin-top: 75px;
  margin-bottom: 55px;
`;

const H1 = styled.h1`
  font-size: 35px;
  font-weight: 700;
  line-height: 41px;
  margin-bottom: 55px;
`;

const schema = yup.object({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  receiveEmails: yup.boolean().default(false),
});

export default function DetailsForm() {
  const onSuccess = () => {
    router.push("/success");
  };

  const { mutate: createUser } = useCreateUser(onSuccess);
  const router = useRouter();

  const { control, handleSubmit, watch, setValue } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const [receiveEmails] = watch(["receiveEmails"]);

  async function sumbitForm() {
    handleSubmit(
      (values) => {
        createUser(values);
      },
      (errors) => console.error("Invalid data", errors)
    )();
  }

  return (
    <DetailsFormWrapper>
      <H1>Submit your details</H1>
      <form onSubmit={handleSubmit(sumbitForm)}>
        <FormFieldsWrapper>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <Input error={error?.message} label="Name" {...field} />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <Input error={error?.message} label="Email" {...field} />
            )}
          />
        </FormFieldsWrapper>

        <CheckboxFieldWrapper>
          <Controller
            control={control}
            name="receiveEmails"
            render={() => (
              <Checkbox
                label="I want to receive updates via email."
                checked={receiveEmails}
                onChange={(e: any) =>
                  setValue("receiveEmails", e.target.checked, {
                    shouldDirty: true,
                  })
                }
              />
            )}
          />
        </CheckboxFieldWrapper>

        <Button>Start the Course</Button>
      </form>
    </DetailsFormWrapper>
  );
}
