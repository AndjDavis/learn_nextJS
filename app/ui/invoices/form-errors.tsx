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
  if (errorType === customerError && state.errors?.customerId) {
    return (
      state.errors.customerId.map((error: string) => <FormMessage error={error} />)
    );
  } else if (errorType === amountError && state.errors?.amount) {
    return (
      state.errors.amount.map((error: string) => <FormMessage error={error} />)
    );
  } else if (errorType === statusError && state.errors?.status) {
    return (
      state.errors.status.map((error: string) => <FormMessage error={error} />)
    );
  }
};


function FormMessage({ error, errorType }: { error?: string, errorType?: string }) {
  if (!error) return null;

  return (
    <div
      id={errorType}
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="mt-2 text-sm text-red-500" key={error}>
        {error}
      </p>
    </div>
  );
};
