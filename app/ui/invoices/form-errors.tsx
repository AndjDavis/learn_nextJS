import { Fragment } from "react";
import { customerError, amountError, statusError } from "@/app/lib/constants";
import { State } from "@/app/lib/actions";


export function FormError({
  state,
  errorType,
}: {
  state: State,
  errorType: string,
}) {
  if (!state?.errors || !errorType) return null;

  let errorsList: string[] = [];

  if (errorType === customerError && state.errors?.customerId) {
    errorsList = state.errors.customerId;
  } else if (errorType === amountError && state.errors?.amount) {
    errorsList = state.errors.amount;
  } else if (errorType === statusError && state.errors?.status) {
    errorsList = state.errors.status;
  }

  return errorsList.map((error) => (
    <Fragment key={error}>
      <FormMessage error={error} errorType={errorType} />
    </Fragment>
  ));
};


function FormMessage({ error, errorType }: { error?: string, errorType?: string }) {
  if (!error) return null;

  return (
    <div
      id={errorType}
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="mt-2 text-sm text-red-500">
        {error}
      </p>
    </div>
  );
};
