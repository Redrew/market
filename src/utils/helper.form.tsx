import React from "react";
import { useFormikContext, Field } from "formik";
import { InputChangeEventDetail } from "@ionic/core/dist/types/components/input/input-interface";
import { IonInput } from "@ionic/react";

const TextField = ({ name, type }: any) => {
  const { setFieldTouched, setFieldValue, values } = useFormikContext<any>();

  // use custom handlers to use ionic's events
  const onBlur = React.useCallback(
    (e: CustomEvent) => {
      const ionInput = e.currentTarget;
      if (!ionInput) {
        return;
      }
      setFieldTouched(name, true);
    },
    [setFieldTouched, name]
  );
  const onChange = React.useCallback(
    async (e: CustomEvent<InputChangeEventDetail>) => {
      const ionInput = e.currentTarget as any;
      if (!ionInput) {
        return;
      }
      const input = await ionInput.getInputElement();
      setFieldValue(name, input.value);
    },
    [setFieldValue, name]
  );

  return (
    <Field name={name}>
      {() => (
        <IonInput
          value={values[name]}
          name={name}
          onIonBlur={onBlur}
          onIonChange={onChange}
          type={type}
          inputMode={type}
          autocomplete="on"
        />
      )}
    </Field>
  );
};

const EnableSubmit: React.FC = () => {
  return (
    <button
      type="submit"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
      }}
      tabIndex={-1}
    />
  );
};

export default TextField;
export { EnableSubmit };
