import React from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  isSubmitting?: boolean;
  isSuccess?: boolean;
}

export function PhoneInput({ value, onChange, error, isSubmitting, isSuccess }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 10) {
      onChange(input);
    }
  };

  const formatPhoneNumber = (value: string) => {
    if (value.length <= 3) return value;
    if (value.length <= 6) return `${value.slice(0, 3)}-${value.slice(3)}`;
    return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={formatPhoneNumber(value)}
            onChange={handleChange}
            className={`w-full px-4 py-4 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
              error ? 'border-red-500' : isSuccess ? 'border-green-500' : 'border-gray-300'
            }`}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || isSuccess || value.length !== 10}
          className={`px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2 whitespace-nowrap disabled:cursor-not-allowed ${
            isSuccess 
              ? 'bg-green-500 text-white disabled:opacity-100' 
              : 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : isSuccess ? (
            <>
              <Check className="w-5 h-5" />
              We sent you a text
            </>
          ) : (
            <>
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}