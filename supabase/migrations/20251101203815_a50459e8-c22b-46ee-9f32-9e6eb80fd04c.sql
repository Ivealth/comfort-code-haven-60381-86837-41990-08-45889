-- Add username and profile picture fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN username text UNIQUE,
ADD COLUMN profile_picture_url text;

-- Update existing profiles to have a default username based on email
UPDATE public.profiles 
SET username = split_part(email, '@', 1) 
WHERE username IS NULL;

-- Make username required going forward
ALTER TABLE public.profiles 
ALTER COLUMN username SET NOT NULL;

-- Update the handle_new_user function to include username
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, email, phone_number, profile_picture_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone_number', NULL),
    COALESCE(NEW.raw_user_meta_data->>'profile_picture_url', NULL)
  );
  RETURN NEW;
END;
$function$;